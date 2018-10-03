using System.Web.Http;
using AppStore.Providers;

namespace AppStore.Controllers
{
    public abstract class BaseApiController : ApiController
    {
        protected IAppStoreDbContext Context;

        protected BaseApiController(IAppStoreDbContext context)
        {
            Context = context;
        }
    }
}