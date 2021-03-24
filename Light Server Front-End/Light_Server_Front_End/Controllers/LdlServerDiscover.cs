using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using IdentityServer4.Validation;
using Org.BouncyCastle.Asn1.Cms;

namespace Light_Server_Front_End.Controllers
{
    public class LdlServerDiscover
    {
        public int Port { get; protected set; } = 8888;
        public string Handshake { get; protected set; } = "LDL-HOLA?";
        public int MaxDiscoverSeconds { get; protected set; } = 10;
        public int MaxFailures { get; protected set; } = 2;

        public IEnumerable<LdlServerInfo> DiscoverServers()
        {
            var receiveEndPoint = new IPEndPoint(IPAddress.Any, Port);
            var broadcastEndPoint = new IPEndPoint(IPAddress.Broadcast, Port);

            var asciiEndoing =new ASCIIEncoding();
            var handshakeBytes = asciiEndoing.GetBytes(Handshake);
            var discoveredLdlServers = new List<LdlServerInfo>();
            
            var udpClient = new UdpClient();
            try
            {
                udpClient.EnableBroadcast = true;
                udpClient.Client.Bind(receiveEndPoint);
                udpClient.Client.ReceiveTimeout = 2000;

                udpClient.Send(handshakeBytes, handshakeBytes.Length, broadcastEndPoint);

                var startTime = DateTime.Now;
                var elapsed = 0D;
                var countFailures = 0;
                var potentiallyDiscoveredLdlServers = new Dictionary<string, string>();
                while (elapsed < MaxDiscoverSeconds && countFailures < MaxFailures)
                {
                    try
                    {
                        var receiveBytes = udpClient.Receive(ref receiveEndPoint);
                        var from = receiveEndPoint.Address.ToString();

                        var receivedData = asciiEndoing.GetString(receiveBytes);
                        if (receivedData != null && receivedData != Handshake)
                        {
                            potentiallyDiscoveredLdlServers.Add(from, receivedData);
                        }
                    }
                    catch
                    {
                        countFailures++;
                    }

                    var now = DateTime.Now;
                    var elapsedTime = now - startTime;
                    elapsed = elapsedTime.TotalSeconds;
                }

                // Did we find any servers?
                foreach (var ip in potentiallyDiscoveredLdlServers.Keys)
                {
                    var receivedData = potentiallyDiscoveredLdlServers[ip];
                    var jsonOps = new JsonSerializerOptions()
                    {
                        PropertyNameCaseInsensitive = true
                    };

                    if (!string.IsNullOrEmpty(receivedData))
                    {
                        try
                        {
                            var ldlServerInfo = JsonSerializer.Deserialize<LdlServerInfo>(receivedData, jsonOps);
                            if (ldlServerInfo != null)
                            {
                                ldlServerInfo.IpAddress = ip;
                                discoveredLdlServers.Add(ldlServerInfo);
                            }
                        }
                        catch
                        {
                        }
                    }
                }
            }
            finally
            {
                udpClient.Close();
            }


            return discoveredLdlServers;
        }
    }
}
