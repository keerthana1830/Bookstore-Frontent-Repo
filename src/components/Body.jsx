import React from "react";

const Body = () => {
  return (
    <>
      <div className="body-container">
        {/* Homepage Hero Section */}
        <div className="homepage-image">
          <h2>WELCOME TO CHAPTERS & VERSE</h2>
          <p>Your next great adventure begins here!</p>
          <div className="overlay"></div>
        </div>

        {/* About Us Section */}
        <div className="about-us">
          <h3>About Us</h3>
          <div className="about-us-image">
            {/* <img
              src="https://th.bing.com/th/id/OIP.XGvyHxGzYJfbakzuJSUBtAHaE6?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="background-image"
            /> */}
          </div>
          <p>
            At <strong>Chapters & Verse</strong>, we believe that every book
            tells a story, and every reader has a journey waiting to unfold.
            Whether you’re a passionate bibliophile, a casual reader, or someone
            looking for the perfect gift, we’ve got something special for you.
            From the latest bestsellers to timeless classics, our shelves are
            brimming with a diverse range of genres to cater to every taste.
          </p>
          <p>
            Immerse yourself in gripping mysteries, explore fantastical worlds,
            uncover the beauty of poetry, or gain insights from
            thought-provoking non-fiction. But <strong>Chapters & Verse</strong>{" "}
            is more than just a place to buy books. It’s a community. We host
            regular book clubs, author meet-and-greets, and literary events
            designed to bring together readers from all walks of life.
          </p>
          <p>
            Come, start your next chapter with us. At{" "}
            <strong>Chapters & Verse</strong>, every book is an adventure
            waiting to happen!
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to foster a love for reading by offering books that
            inspire, entertain, and educate. We strive to create a welcoming
            space where readers can connect, share their passions, and discover
            new favorites.
          </p>
          <p>
            We are dedicated to providing our community with not only a wide
            selection of books, but also experiences that enrich lives. From
            thought-provoking talks with authors to hands-on workshops, we
            believe in cultivating a love for literature that goes beyond the
            shelves.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="values">
          <h3>Our Core Values</h3>
          <p>
            At <strong>Chapters & Verse</strong>, we are guided by a few core
            values:
          </p>
          <ul>
            <li>
              <strong>Passion:</strong> We are passionate about books and
              everything they represent.
            </li>
            <li>
              <strong>Community:</strong> We believe in creating a space where
              readers can connect and grow together.
            </li>
            <li>
              <strong>Integrity:</strong> We value honesty and transparency in
              every interaction.
            </li>
            <li>
              <strong>Inclusion:</strong> Our bookstore is open to everyone, no
              matter their interests or background.
            </li>
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="upcoming-events">
          <h3>Upcoming Events</h3>
          <p>
            We host a variety of exciting events each month that bring together
            readers, authors, and creatives from all over. Here are just a few
            of the upcoming events:
          </p>
          <ul>
            <li>
              <strong>Book Signing with Author Jane Doe</strong> - February
              10th, 2025 at 3:00 PM
            </li>
            <li>
              <strong>
                Monthly Book Club Discussion: "The Midnight Library"
              </strong>{" "}
              - February 15th, 2025 at 6:00 PM
            </li>
            <li>
              <strong>Children’s Story Time</strong> - February 20th, 2025 at
              10:00 AM
            </li>
            <li>
              <strong>Poetry Night: Open Mic</strong> - February 25th, 2025 at
              7:00 PM
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h3>What Our Readers Are Saying</h3>
          <div className="testimonial">
            <p>
              "Chapters & Verse is my go-to place for all things books! The
              staff is always friendly and ready to help me find something new.
              I love the events they host, too!"
            </p>
            <span>- Sarah K.</span>
          </div>
          <div className="testimonial">
            <p>
              "A truly magical bookstore. The atmosphere is warm and welcoming,
              and I always leave with a new favorite book."
            </p>
            <span>- Michael T.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
