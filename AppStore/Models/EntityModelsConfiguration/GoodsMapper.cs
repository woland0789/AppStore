using System.ComponentModel.DataAnnotations.Schema;
using AppStore.Models.EntityModels;

namespace AppStore.Models.EntityModelsConfiguration
{
    public class GoodsMapper : BaseMapper<Goods>
    {
        public GoodsMapper()
        {
            ToTable("Goods");
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}