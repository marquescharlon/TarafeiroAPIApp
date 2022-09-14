using Microsoft.EntityFrameworkCore;

namespace TarafeiroAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Tarefa> Tarefas { get; set; }  
        public DbSet<TarefaTipo> TarefasTipos { get; set; }
        public DbSet<Status> Statuses { get; set; }
    }
}
