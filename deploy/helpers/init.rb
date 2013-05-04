module ContestDetermine

    def determine_body_class

        clz = []

        clz.push "base"

        clz.push "akqa" if request.path_info =~ /akqa(.*)/

        return clz.join " "
    end

    def determine_header

        #haml :"partials/headers/default"
    end
end

helpers ContestDetermine