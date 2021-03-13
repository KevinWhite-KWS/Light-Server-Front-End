Blockly.defineBlocksWithJsonArray([
  {
    "type": "fixedpixelscolour",
    "message0": "pixels= %1 %2 colour= %3",
    "args0": [
      {
        "type": "field_number",
        "name": "pixels",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "colour",
        "colour": "#ff0000"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "pixelscolour",
    "message0": "colour= %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "colour",
        "colour": "#ff0000"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },


  {
    "type": "repeat",
    "message0": "Repeat %1 Infinite? %2 %3 Number of times to loop:= %4 %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "infiniteLoop",
        "checked": true
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "numberOfLoops",
        "value": 2,
        "min": 2,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "instructions"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Repeats a set of instruction 2 or more times or an infinite number of times",
    "helpUrl": ""
  },



  {
    "type": "program",
    "message0": "program description:= %1 %2 %3",
    "args0": [
      {
        "type": "field_input",
        "name": "programName",
        "text": "My program"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "instructions"
      }
    ],
    "colour": 210,
    "tooltip": "Contains an LDL program",
    "helpUrl": ""
  },


  {
    "type": "ins_0_clear",
    "message0": "Clear all LEDs %1 duration= %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Clears the LEDs by turning them all off",
    "helpUrl": ""
  },

  {
    "type": "ins_1_solid",
    "message0": "Set LEDs to solid %1 duraiton := %2 %3 colour := %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "colour",
        "colour": "#ff0000"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Sets all LEDs to the same colour",
    "helpUrl": ""
  },

  {
    "type": "ins_2_pattern",
    "message0": "Pattern %1 duration := %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "pattern",
        "check": "fixedpixelscolour"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Sets the first n LEDs to a pattern which is then repeated along the entire length of LEDs",
    "helpUrl": ""
  },

  {
    "type": "ins_3_slider",
    "message0": "slider %1 duration:= %2 %3 width:= %4 %5 start at far side?:= %6 %7 head length:=%8 %9 tail length=%10 %11 slider colour:= %12 %13 background colour:= %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "width",
        "value": 1,
        "min": 1,
        "max": 50
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "startFar",
        "checked": false
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "headLength",
        "value": 0,
        "min": 0,
        "max": 100
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "tailLength",
        "value": 0,
        "min": 0,
        "max": 100
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "sliderColour",
        "colour": "#ff0000"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "backgroundColour",
        "colour": "#00ff00"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Moves a slider (a length of pixels of a specified colour) gradually along the length of pixels",
    "helpUrl": ""
  },


  {
    "type": "ins_4_fade",
    "message0": "fade %1 duration:= %2 %3 step:= %4 %5 fade out?:= %6 %7 start colour:= %8 %9 end colour:= %10",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "step",
        "value": 1,
        "min": 1,
        "max": 50
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "fadeOut",
        "checked": false
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "startColour",
        "colour": "#000000"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_colour",
        "name": "endColour",
        "colour": "#00ff00"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Fades in or fades out the LEDs from the start colour to the end colour",
    "helpUrl": ""
  },

  {
    "type": "ins_5_stochastic",
    "message0": "stochastic %1 duration:= %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "colours"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Randomly sets the LEDs to two or more colours",
    "helpUrl": ""
  },


  {
    "type": "ins_6_blocks",
    "message0": "Blocks %1 duration := %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "blocks",
        "check": "fixedpixelscolour"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Sets the LEDs to two or more blocks of colours where each block occupies a particular percentage of the available LEDs",
    "helpUrl": ""
  },

  {
    "type": "ins_7_rainbow",
    "message0": "rainbow %1 duration:= %2 length= %3 steps= %4 start far? %5 %6 %7",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "duration",
        "value": 1,
        "min": 1,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "length",
        "value": 10,
        "min": 1,
        "max": 255
      },
      {
        "type": "field_number",
        "name": "steps",
        "value": 60,
        "min": 1,
        "max": 255
      },
      {
        "type": "field_checkbox",
        "name": "startFar",
        "checked": true
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "colours"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 360,
    "tooltip": "Sets the LEDs to a rainbow of colours",
    "helpUrl": ""
  },

  {
    type: 'begin',
    message0: 'Begin',
    nextStatement: 'any',
    colour: 180,
    tooltip: 'begin statement'
  },
  {
    type: 'move',
    message0: 'Move by %1 steps',
    args0: [
      {
        type: 'field_number',
        name: 'steps',
        value: 0
      }
    ],
    previousStatement: 'any',
    nextStatement: 'any',
    colour: 240,
    tooltip: 'steps to move'
  },
  {
    type: 'end',
    message0: 'End %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'end_types',
        options: [['Now', 'now'], ['Later', 'later']]
      }
    ],
    previousStatement: 'any',
    colour: 60,
    tooltip: 'end type'
  }
]);
