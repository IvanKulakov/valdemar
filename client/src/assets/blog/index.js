import Image1 from './images/image1.png';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';
import Image6 from './images/image6.jpg';
import Image7 from './images/image7.jpg';
import Image8 from './images/image8.jpg';
import Image9 from './images/image9.jpg';
import Image10 from './images/image10.jpg';

import Video1 from './video/video1.mp4';
import Video2 from './video/video2.mp4';
import Video3 from './video/video3.mp4';
import Video4 from './video/video4.mp4';
import Video5 from './video/video5.mp4';
import Video6 from './video/video6.mp4';
import Video7 from './video/video7.mp4';
import Video8 from './video/video8.mp4';
import Video9 from './video/video9.mp4';
export const blogVideo = [
  {
    id: 1,
    views: 946,
    date: '01.03.2024',
    img: Image1,
    video: Video1,
  },
  {
    id: 2,
    views: 946,
    date: '09.02.2024',
    img: Image1,
    video: Video2,
  },
  {
    id: 3,
    views: 721,
    date: '24.07.2024',
    img: Image1,
    video: Video3,
  },
  {
    id: 4,
    views: 726,
    date: '17.08.2024',
    img: Image1,
    video: Video4,
  },
  {
    id: 5,
    views: 953,
    date: '24.04.2024',
    img: Image1,
    video: Video5,
  },
  {
    id: 6,
    views: 893,
    date: '18.05.2024',
    img: Image1,
    video: Video6,
  },
  {
    id: 7,
    views: 858,
    date: '29.3.2024',
    img: Image1,
    video: Video7,
  },
  {
    id: 8,
    views: 953,
    date: '24.06.2024',
    img: Image1,
    video: Video8,
  },
  {
    id: 9,
    views: 745,
    date: '24.01.2024',
    img: Image1,
    video: Video9,
  },
];
export const blogBracelet = [
  {
    id: 18,
    views: 750,
    date: '16.08.2024',
    img: Image10,
    video: '',
  },
  {
    id: 17,
    views: 752,
    date: '17.04.2024',
    img: Image9,
    video: '',
  },
];

export const blogCoulomb = [
  {
    id: 11,
    views: 684,
    date: '14.02.2024',
    img: Image3,
    video: '',
  },

  {
    id: 13,
    views: 627,
    date: '14.09.2024',
    img: Image5,
    video: '',
  },
  {
    id: 12,
    views: 543,
    date: '18.11.2023',
    img: Image4,
    video: '',
  },
  {
    id: 14,
    views: 827,
    date: '02.07.2024',
    img: Image6,
    video: '',
  },
];

export const blogAmulet = [
  {
    id: 16,
    views: 892,
    date: '01.05.2024',
    img: Image8,
    video: '',
  },

  {
    id: 15,
    views: 571,
    date: '11.01.2024',
    img: Image7,
    video: '',
  },
];

export const blog = [
  {
    id: 1,
    views: 946,
    date: '01.03.2024',
    img: Image1,
    video: Video1,
  },

  {
    id: 18,
    views: 750,
    date: '16.08.2024',
    img: Image10,
    video: '',
  },
  {
    id: 2,
    views: 946,
    date: '09.02.2024',
    img: Image1,
    video: Video2,
  },

  {
    id: 17,
    views: 752,
    date: '17.04.2024',
    img: Image9,
    video: '',
  },
  {
    id: 3,
    views: 721,
    date: '24.07.2024',
    img: Image1,
    video: Video3,
  },

  {
    id: 16,
    views: 892,
    date: '01.05.2024',
    img: Image8,
    video: '',
  },
  {
    id: 4,
    views: 726,
    date: '17.08.2024',
    img: Image1,
    video: Video4,
  },

  {
    id: 15,
    views: 571,
    date: '11.01.2024',
    img: Image7,
    video: '',
  },

  {
    id: 11,
    views: 684,
    date: '14.02.2024',
    img: Image3,
    video: '',
  },
  {
    id: 5,
    views: 953,
    date: '24.04.2024',
    img: Image1,
    video: Video5,
  },
  {
    id: 6,
    views: 893,
    date: '18.05.2024',
    img: Image1,
    video: Video6,
  },

  {
    id: 14,
    views: 827,
    date: '02.07.2024',
    img: Image6,
    video: '',
  },
  {
    id: 7,
    views: 858,
    date: '29.3.2024',
    img: Image1,
    video: Video7,
  },

  {
    id: 13,
    views: 627,
    date: '14.09.2024',
    img: Image5,
    video: '',
  },
  {
    id: 8,
    views: 953,
    date: '24.06.2024',
    img: Image1,
    video: Video8,
  },

  {
    id: 12,
    views: 543,
    date: '18.11.2023',
    img: Image4,
    video: '',
  },
  {
    id: 9,
    views: 745,
    date: '24.01.2024',
    img: Image1,
    video: Video9,
  },
];

export const getAdjacentArticles = (id) => {
  const adjacentArticles = [];
  const idx = blog.findIndex((x) => x.id == id);
  if (blog.length - idx > 1) {
    adjacentArticles.push(blog[idx + 1]);
    if (blog.length - idx > 2) adjacentArticles.push(blog[idx + 2]);
    if (idx > 0) adjacentArticles.push(blog[idx - 1]);
    else if (blog.length - idx > 3) adjacentArticles.push(blog[idx + 3]);
    if (adjacentArticles.length == 3) return adjacentArticles;
    else if (idx > 1) adjacentArticles.push(blog[idx - 2]);
  } else {
    if (idx > 0) adjacentArticles.push(blog[idx - 1]);
    if (idx > 1) adjacentArticles.push(blog[idx - 2]);
    if (idx > 2) adjacentArticles.push(blog[idx - 3]);
  }
  return adjacentArticles;
};
