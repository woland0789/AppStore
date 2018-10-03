using System.Data.Entity.ModelConfiguration.Configuration;

namespace AppStore.Providers
{
    public interface IEntityConfiguration
    {
        void AddConfiguration(ConfigurationRegistrar registrar);
    }
}