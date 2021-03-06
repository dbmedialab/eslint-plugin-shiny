/**
 * @fileoverview Disallows to use index imports from shiny.
 * @author Sergey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-index-import"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-index-import", rule, {

    valid: [

        {
            code: "import { Heading } from '@aller/shiny/lib/atoms/Heading';"
        }
    ],

    invalid: [
        {
            code: "import { Heading } from '@aller/shiny';",
            errors: [{
                message: "Index imports from shiny are not allowed.",
                type: "CRITICAL"
            }]
        }
    ]
});
