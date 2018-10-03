using System;
using AppStore.Providers;

namespace AppStore.Models.EntityModels
{
    public class Basket : EntityBase
    {
        public Goods Goods { get; set; }
        public decimal Amount { get; set; }
		public string User { get; set; }

		public static Basket Create(IAppStoreDbContext ctx, int goodsId, decimal amount, string userName)
		{
			if (string.IsNullOrEmpty(userName))
			{
				throw new ArgumentException("Invalid user", userName);
			}

			var goods = ctx.Goods.Find(goodsId);

			var basket = new Basket {Amount = amount, Goods = goods, User = userName};

            ctx.Baskets.Add(basket);

            ctx.SaveChanges();

            return basket;
        }
    }
}