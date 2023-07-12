import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Nav = () => {
  const {
    global
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        tel
        email
      }
    }
  `)

  return (
    <>
      <WrapperTopBar>
        <div className="max-width">
          <p className="workingHours">GODZINY PRACY: PON – PT : 8.00 – 18.00</p>
          <div className="contact">
            <a href={`tel:${global.tel}`}>
              <Tel />
              <span>{global.tel}</span>
            </a>
            <a href={`mailto:${global.email}`}>
              <Mail />
              <span>{global.email}</span>
            </a>
          </div>
        </div>
      </WrapperTopBar>
      <WrapperNav>
        <div className="max-width">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita maxime, ducimus eaque ullam nihil totam corrupti neque repudiandae beatae facilis quam optio voluptatum recusandae reiciendis, tenetur maiores est. Tempore, rerum animi. Commodi, quisquam ratione ducimus sed eveniet enim quos veritatis vero fugit aliquam ipsum at inventore ex atque obcaecati quaerat culpa saepe similique odit illum. Debitis deleniti officiis placeat animi fugiat laboriosam consequuntur voluptas odio, quisquam ad quas eius. Fuga autem aliquam modi nesciunt quibusdam voluptate itaque reprehenderit optio voluptatem tempore, porro laborum ea perspiciatis veniam explicabo cupiditate dignissimos repudiandae nemo tempora animi atque laudantium voluptatum. Unde temporibus quibusdam dicta, molestias omnis reprehenderit corporis sequi et nihil delectus possimus corrupti cumque doloribus in facere ipsa expedita neque aperiam suscipit molestiae dignissimos, numquam ipsam minus! Maiores atque dolores officia tenetur, laboriosam perspiciatis deleniti suscipit, culpa sed molestiae porro blanditiis animi sapiente eum corrupti minus iste molestias quibusdam ex recusandae voluptate. Eius corrupti minus laboriosam repellendus animi consectetur eveniet numquam esse quae. Nihil dolorum minima adipisci aspernatur delectus maxime suscipit officiis vero accusamus, mollitia esse eaque doloremque quas perferendis vel cum obcaecati sapiente nesciunt facilis vitae architecto sit corrupti dolores perspiciatis? Maxime eveniet quam officiis dignissimos rerum sint reiciendis asperiores porro!
        </div>
      </WrapperNav>
    </>
  );
}

const WrapperTopBar = styled.div`
  background-color: #00259C;
  color: #fff;
  padding: 16px 0;
  > .max-width {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
  .workingHours {
    text-transform: uppercase;
  }
  .contact {
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px 48px;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px;
      
    }
  }
`

const WrapperNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
`


const Tel = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='15'
    height='15'
    fill='none'
    viewBox='0 0 15 15'
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.647 7.546a6.067 6.067 0 002.83 2.823.581.581 0 00.574-.044l1.814-1.212a.573.573 0 01.552-.05l3.396 1.458a.573.573 0 01.349.602 3.484 3.484 0 01-3.455 3.041 9.87 9.87 0 01-9.87-9.87A3.483 3.483 0 013.878.84a.573.573 0 01.603.348l1.458 3.404a.58.58 0 01-.043.544L4.684 6.98a.58.58 0 00-.037.566v0z'
    ></path>
  </svg>
)

const Mail = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='15'
    fill='none'
    viewBox='0 0 16 15'
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.083 10.38a2.882 2.882 0 100-5.763 2.882 2.882 0 000 5.763z'
    ></path>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11.91 13.262A6.917 6.917 0 1115 7.498c0 1.593-.576 2.882-2.017 2.882-1.441 0-2.018-1.29-2.018-2.882V4.616'
    ></path>
  </svg>
)
 
export default Nav;