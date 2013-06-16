before "/services/jobs*" do

    @jobs_loader = JobsLoader.new
end

get '/services/jobs/list' do

    json_jobs = @jobs_loader.to_json_string

end

get '/services/jobs/:jid' do |jid|

    job = @jobs_loader.get_job_by_id(jid.to_i)

     job.to_json_string
end


