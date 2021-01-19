import { useStaticQuery, graphql } from "gatsby"


export const BookData = () => {
    const bookData = useStaticQuery(graphql`
      query BookQuery {
            allBooks {
                edges {
                    node {
                        id
                  author
                  title
                  bookPhoto
                  background 
                  status {
                      complete
                      rating
                  }
                  description
                }
                    }
                }
               
      }
    `);

    return bookData;
  };