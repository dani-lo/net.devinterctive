before "/pages/jobs*" do
    @jobs_loader = JobsLoader.new
end

get '/pages/jobs' do
    @jobs_list = @jobs_loader.jobs
    haml :"pages/jobs"
end