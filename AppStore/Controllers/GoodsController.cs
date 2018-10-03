using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AppStore.Models;
using AppStore.Models.EntityModels;
using AppStore.Providers;

namespace AppStore.Controllers
{
    public class GoodsController : BaseApiController
    {
        public GoodsController(IAppStoreDbContext context) : base(context)
        {
        }

		// GET: api/Goods
	    public object GetGoods([FromUri]FilterModel filter)
	    {
		    var totalCount = Context.Goods.AsNoTracking().Count();
	        return new {
		        Total = totalCount,
		        Data = Context.Goods.AsNoTracking()
					.OrderBy(x=>x.Id)
					.Skip((filter.Page - 1) * 10)
					.Take(10)
		        };
        }

		// GET: api/Goods/5
	    public IHttpActionResult GetGoods(int id)
		{
			var goods = Context.Goods.AsNoTracking().FirstOrDefault(x=>x.Id == id);
			if (goods == null)
			{
				return NotFound();
			}

			return Ok(goods);
		}

		// PUT: api/Goods/5
		[Authorize(Roles = UserRolesConst.Admin)]
		public IHttpActionResult PutGoods(int id, Goods goods)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != goods.Id)
			{
				return BadRequest();
			}

			Context.Entry(goods).State = EntityState.Modified;
			Context.SaveChanges();

			return StatusCode(HttpStatusCode.NoContent);
		}

		// POST: api/Goods
	    [Authorize(Roles = UserRolesConst.Admin)]
		public IHttpActionResult PostGoods(Goods goods)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			Context.Goods.Add(goods);
			Context.SaveChanges();

			return CreatedAtRoute("DefaultApi", new { id = goods.Id }, goods);
		}

		// DELETE: api/Goods/5
		[Authorize(Roles = UserRolesConst.Admin)]
		public IHttpActionResult DeleteGoods(int id)
		{
			Goods goods = Context.Goods.Find(id);
			if (goods == null)
			{
				return NotFound();
			}

			Context.Goods.Remove(goods);
			Context.SaveChanges();

			return Ok(goods);
		}
	}
}