using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.ModelBinding;
using AppStore.Models.EntityModels;
using AppStore.Providers;
using Microsoft.AspNet.Identity;

namespace AppStore.Controllers
{
    public class Test
    {
        public decimal Amount { get; set; }
        public int GoodsId { get; set; }
    }

	[Authorize]
	public class BasketController : BaseApiController
    {
        public BasketController(IAppStoreDbContext context) : base(context)
        {
        }
        
        // GET: api/Basket
        public IQueryable<Basket> GetBasket()
        {
	        var userName = HttpContext.Current.User.Identity.GetUserName();

			return Context.Baskets
                .AsNoTracking()
                .Include(x => x.Goods)
		        .Where(x=>x.User.Equals(userName, StringComparison.OrdinalIgnoreCase));
        }

        // POST: api/Basket
        [HttpPost]
        public IHttpActionResult PostBasket(Test test)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

	        var userName = HttpContext.Current.User.Identity.GetUserName();

            var basket = Basket.Create(Context, test.GoodsId, test.Amount, userName);

            return CreatedAtRoute("DefaultApi", new { id = basket.Id }, basket);
        }

        // DELETE: api/Goods/5
        [HttpDelete]
        public IHttpActionResult DeleteBasketItem(int id)
        {
            var basket = Context.Baskets.Find(id);
            if (basket == null)
            {
                return NotFound();
            }

            Context.Baskets.Remove(basket);
            Context.SaveChanges();

            return Ok(basket);
        }

        //  GET: api/GetCount
        [HttpGet]
        [Route("api/GetCount")]
        public int GetCount()
        {
			var userName = HttpContext.Current.User.Identity.GetUserName();
            return Context.Baskets.AsNoTracking().Count(x=>x.User.Equals(userName, StringComparison.OrdinalIgnoreCase));
        }

        //// GET: api/Goods/5
        //public IHttpActionResult GetGoods(int id)
        //{
        //    Goods goods = _ctx.Goods.Find(id);
        //    if (goods == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(goods);
        //}

        //// PUT: api/Goods/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutGoods(int id, Goods goods)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != goods.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _ctx.Entry(goods).State = EntityState.Modified;

        //    try
        //    {
        //        _ctx.SaveChanges();
        //    }
        //    catch (_ctxUpdateConcurrencyException)
        //    {
        //        if (!GoodsExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}
        

    }
}