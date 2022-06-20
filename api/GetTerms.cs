using System;
using System.IO;
using System.Threading.Tasks;
using AsterSystemsInc.Glossary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AsterSystemsInc.Glossary
{
    public static class GetTerms
    {
        public static readonly TermModel[] s_terms = new[]
        {
            new TermModel
            {
                Term = "Agile!",
                Definition = "A set of software development principles and practices designed to allow teams to respond quickly to changes in requirements and the business environment"
            },
            new TermModel
            {
                Term = "caching*",
                Definition = "The technique of saving the results of database queries that are likely to be repeated in or near the ultimate consumer of the results. This improves performance because when the query is repeated, there is no need to access the database again."
            },
            new TermModel
            {
                Term = "defense in depth#",
                Definition = "The practice of providing multiple layers of system security so that even if an attacker penetrates one layer, they might be stopped by the next layer down."
            }
        };

        [FunctionName("GetTerms")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string responseMessage = JsonConvert.SerializeObject(s_terms);

            return new OkObjectResult(responseMessage);
        }
    }
}
