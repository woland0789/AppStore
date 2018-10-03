using System.ComponentModel.DataAnnotations.Schema;
using AppStore.Models.EntityModels;

namespace AppStore.Models.EntityModelsConfiguration
{
    public class BasketMapper : BaseMapper<Basket>
    {
        public BasketMapper()
        {
            ToTable("Basket");

            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
	        Property(x => x.User);

            HasRequired(x => x.Goods).WithMany().Map(x=>x.MapKey("GoodsId"));
        }
    }
}