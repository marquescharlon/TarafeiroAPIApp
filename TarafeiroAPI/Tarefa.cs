namespace TarafeiroAPI
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Status { get; set; } = string.Empty;
        public string Comentario { get; set; } = string.Empty;
        public int TarefaTipoId { get; set; }
        public TarefaTipo? TarefaTipo { get; set; }
    }
}
