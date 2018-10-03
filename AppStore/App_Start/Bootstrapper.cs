using System;
using System.Data.Entity;
using AppStore.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler;
using Microsoft.Owin.Security.DataHandler.Serializer;
using Microsoft.Practices.Unity.Configuration;
using Unity;
using Unity.Lifetime;

namespace AppStore
{
    public class Bootstrapper
    {
        static readonly Lazy<IUnityContainer> _ioc = new Lazy<IUnityContainer>(() =>
            {
                var container = new UnityContainer();
                RegisterTypes(container);
                return container;
            });

        public static IUnityContainer IoC => _ioc.Value;

        private static void RegisterTypes(IUnityContainer ioc)
        {
            ioc.LoadConfiguration();

            ioc.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
	        ioc.RegisterType<DbContext, ApplicationDbContext>(new HierarchicalLifetimeManager());

	        ioc.RegisterType(typeof(ISecureDataFormat<>), typeof(SecureDataFormat<>));
	        ioc.RegisterType<ISecureDataFormat<AuthenticationTicket>, SecureDataFormat<AuthenticationTicket>>();
	        ioc.RegisterType<ISecureDataFormat<AuthenticationTicket>, TicketDataFormat>();
	        ioc.RegisterType<IDataSerializer<AuthenticationTicket>, TicketSerializer>();
		}

        
    }
}