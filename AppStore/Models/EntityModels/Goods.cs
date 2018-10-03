namespace AppStore.Models.EntityModels
{
    public class Goods : EntityBase
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
    }
}