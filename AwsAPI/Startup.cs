using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AWS.API.Interfaces;
using AWS.API.Services;
using AWS.API.Models;

namespace AwsAPI
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            //Todo: create factory for "AWS services" ??
            //      user related params to config
            //      service related params to service class (ie, GlacierService)

            AWSRequestParameters awsParams = new AWSRequestParameters();
            //awsParams.AccessKey = "AKIAJGTCNGBYORCFUEYA";
            //awsParams.SecretKey = "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";
            awsParams.AccessKey = "AKIAJR2CHLUHR32Y2JJQ";
            awsParams.SecretKey = "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";            

            awsParams.Region = "us-east-1";
            awsParams.Service = "glacier";
            awsParams.HTTPMethod = "GET";
            awsParams.CanonicalURI = "/-/vaults";
            awsParams.CanonicalQueryString = "";
            awsParams.CanonicalHeaders = "glacier.us-east-1.amazonaws.com";

            services.AddSingleton<IGlacierService>(new GlacierService(awsParams));

            services.AddCors();
            services.AddMvc();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

            app.UseCors(builder =>
                   builder.WithOrigins("*")
                   .AllowAnyHeader());

            app.UseMvcWithDefaultRoute();

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }
    }
}
