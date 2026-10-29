using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=orders.db"));
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

app.Use(async (context, next) =>
{
    if (context.Request.Path.StartsWithSegments("/api", out var remaining))
    {
        context.Request.Path = remaining;
    }

    await next(context);
});

app.UseRouting();

var frontendPath = Path.GetFullPath(
    Path.Combine(app.Environment.ContentRootPath, "../frontend/dist"));
if (Directory.Exists(frontendPath))
{
    var files = new PhysicalFileProvider(frontendPath);
    app.UseDefaultFiles(new DefaultFilesOptions { FileProvider = files });
    app.UseStaticFiles(new StaticFileOptions { FileProvider = files });
}

app.MapGet("/health", () => Results.Ok(new { status = "ok" }));

app.Run();
