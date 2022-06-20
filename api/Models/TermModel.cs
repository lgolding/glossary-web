using Newtonsoft.Json;

namespace AsterSystemsInc.Glossary.Models
{
    public class TermModel
    {
        [JsonProperty("term")]
        public string Term { get; set; }
        [JsonProperty("definition")]
        public string Definition { get; set; }
    }
}