using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using AppStore.Models;
using AppStore.Models.EntityModels;

namespace AppStore.Providers
{
    public interface IAppStoreDbContext
    {
        DbSet<Goods> Goods { get; }
        DbSet<Basket> Baskets { get; }

		int SaveChanges();
	    DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

    }
}