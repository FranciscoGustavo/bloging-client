import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { CSSTr, CSSAuthor, CSSCategory, CSSTitle, CSSStatus } from './styles';

const CardRowPost = ({ userCover, username, es, slug, isPublic }) => {
  const [{ user }] = useSession();

  return (
    <CSSTr>
      <td>
        <CSSAuthor>
          <img src={userCover} alt={username} />
          <div>
            <p>{username}</p>
            <p>{user?.email}</p>
          </div>
        </CSSAuthor>
      </td>
      <td>
        <CSSTitle>{es.title}</CSSTitle>
        <CSSCategory>Optimization</CSSCategory>
      </td>
      <td>
        <CSSStatus isPublic={isPublic}>
          {isPublic ? 'Publicado' : 'Borrador'}
        </CSSStatus>
      </td>
      <td>
        <Link href={`/dashboard/posts/${slug}/edit`}>
          <a>Edit</a>
        </Link>
      </td>
    </CSSTr>
  );
};

export default CardRowPost;
