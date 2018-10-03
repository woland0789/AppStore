using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using AppStore.Models;
using AppStore.Models.EntityModels;

namespace AppStore.Providers
{
    public class AppStoreDbContext : DbContext, IAppStoreDbContext
    {
        static AppStoreDbContext()
        {
            Database.SetInitializer<AppStoreDbContext>(null);
        }

        public AppStoreDbContext() : base("AppStoreConnection")
        {

        }

        public DbSet<Goods> Goods { get; set; }

        public DbSet<Basket> Baskets { get; set; }


		protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            foreach (var type in TypesImplementingInterface(typeof(IEntityConfiguration)))
            {
                ((IEntityConfiguration)type.GetConstructor(new Type[] {}).Invoke(null)).AddConfiguration(modelBuilder.Configurations);
            }
            
            base.OnModelCreating(modelBuilder);
        }

        private static IEnumerable<Type> TypesImplementingInterface(Type desiredType)
        {
            return AppDomain
                .CurrentDomain
                .GetAssemblies()
                .SelectMany(assembly => assembly.GetTypes())
                .Where(type => desiredType.IsAssignableFrom(type) && 
                               type.IsAbstract == false && 
                               type.IsGenericTypeDefinition == false && 
                               type.IsInterface == false);
        }
    }
}