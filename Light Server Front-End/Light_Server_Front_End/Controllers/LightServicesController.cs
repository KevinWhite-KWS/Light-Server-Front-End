// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Light_Server_Front_End.ViewModels;
using AutoMapper;
using DAL.Models;
using DAL.Core.Interfaces;
using Light_Server_Front_End.Authorization;
using Light_Server_Front_End.Helpers;
using Microsoft.AspNetCore.JsonPatch;
using DAL.Core;
using IdentityServer4.AccessTokenValidation;

namespace Light_Server_Front_End.Controllers
{
    // [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    public class LightServicesController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public LightServicesController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }


        [HttpPost("program")]
        public async Task<IActionResult> RunProgram([FromBody] string program, string ip, string authorisation)
        {
            var temp =
                "{" +
                    "\"name\" : \"email sent!\"," +
                    "\"instructions\" : {" +
                        "\"instruction\" : \"040100000F0000000FF0000\"" +
                    "}" +
                "}";

            // proxy the request to the actual light-server
            var request = new HttpRequestMessage(HttpMethod.Post,
                $"http://{ip}/program");
            request.Headers.Add("Authorization", $"Basic {authorisation}");
            request.Content = new StringContent(program);
            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                return new StatusCodeResult((int)response.StatusCode);
            }

            return new OkResult();
        }

        [HttpGet("servers")]
        public async Task<IActionResult> FindServers()
        {
            var ldlServerDiscover = new LdlServerDiscover();
            var ldlServers = ldlServerDiscover.DiscoverServers();

            return new ObjectResult(ldlServers);
        }
    }
}
