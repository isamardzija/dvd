import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Posts from './collections/Posts';
import Pages from './collections/Pages';


export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Pages
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
