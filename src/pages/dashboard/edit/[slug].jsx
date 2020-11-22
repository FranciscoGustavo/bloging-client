import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import { Loading } from '@/atoms';
import { PostEditor } from '@/organisms';
import { LayoutDashboard } from '@/templates';
import { UsersService } from 'root/services';
import { useRequest } from 'root/hooks';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const DashboardEdit = () => {
  if (typeof window === 'undefined') return <h1>Cargando Pagina</h1>
  
  const { query: { slug }  } = useRouter();
  const [error, loading, data] = useRequest(UsersService.getOnePost(slug));

  const handleData = (data) => {
    return [
      { name: 'id', value: data.id },
      { name: 'title', value: data.title },
      { name: 'cover', value: data.cover },
      { name: 'body', value: data.body },
      { name: 'description', value: data.description },
      { name: 'keywords', value: data.keywords },
      { name: 'slug', value: data.slug },
      { name: 'isPublic', value: data.isPublic },
    ]
  }

  return (
    <LayoutDashboard>
      { loading ? <Loading /> : null }
      { !error && !loading ?  <PostEditor data={handleData(data)} /> : null }
      { error ? <h1>Error</h1> : null }
		</LayoutDashboard>
  );
}
 export default DashboardEdit;