using System.ComponentModel.DataAnnotations;

namespace TarafeiroAPI
{
    public class TarefaTipo
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string TarefaNome { get; set; } = string.Empty;
    }
}
