class JobsLoader

    attr_accessor :jobs

    def initialize

        @jobs = []

        i = 0

        @replacements = [
            ["_c", ","],
            ["_cl", ":"],
            ["_fs", "/"]
        ]

        jobs_data = YAML::load(File.open("data/jobs.yaml"))

        jobs_data.each do |job_data|

            job = Job.new

            job_data.each do |key, val|

                if key == "jid"

                    job.jid = val

                elsif key == "role"

                    job.role = parse_replace_string(val)


                elsif key == "company"

                    company = Company.new

                    job_data[key].each do |ckey, cval|

                        if company.respond_to? ckey

                            company.send "#{ckey}=", parse_replace_string(cval)
                        end
                    end

                    job.company = company

                    next
                end

            end


            @jobs.push job

        end

    end

    def to_json_string

        json_output = "{"
        counter = 0
        total = @jobs.length

        @jobs.each do |job|

            json_output += job.to_json_string

            counter = counter + 1

            json_output += "," unless counter == total

        end

        json_output += "}"

        json_output

    end

    def get_job_by_id(jid)

        @jobs.each do |job|
            return job if job.jid == jid
        end

    end

    def parse_replace_string (str)

        @replacements.each {|replacement| str.gsub!(replacement[0], replacement[1])}
        str
    end

end

class Job

    include Comparable

    attr_accessor(
        :jid,
        :tester,
        :img,
        :company,
        :date,
        :role,
        :description,
        :urls,
        :tech,
        :start
    )

    def initialize
        #
    end

    def <=> other

        self.start <=> other.start
    end

    def to_json_string

        "{jid:#{@jid},role:'#{@role}',company:#{@company.to_json_string}}"

    end


end

class Company

    attr_accessor(
        :name,
        :type,
        :description
    )

    def initialize
        #
    end

    def to_hash()
        #
        {
            "name" => @name
        }
    end

    def to_json_string

        "{name:'#{@name}',type:'#{@role}',description:'#{@description}'}"

    end
end