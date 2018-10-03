using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using AppStore.Models.EntityModels;
using AppStore.Providers;

namespace AppStore.Models.EntityModelsConfiguration
{
    public abstract class BaseMapper<T> : EntityTypeConfiguration<T>, IEntityConfiguration where T : EntityBase
    {
        public void AddConfiguration(ConfigurationRegistrar registrar)
        {
            registrar.Add(this);
        }
    }
}