import {createClient} from "next-sanity"

export const client = createClient({
        projectId: 'lib7l8yy',
        dataset: 'production',
        apiVersion: "2024-01-01",
        useCdn: false,
    })

