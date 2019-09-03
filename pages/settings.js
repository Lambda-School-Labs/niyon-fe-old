import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';

function Page() {
  return (
    <Layout pageName="Settings">
      <Wrapper />
      Hello World!
    </Layout>
  );
}

export default withAuth(Page);
