import { contentfulClient } from 'src/lib/contentful.ts';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const fetchEntries = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'videoHomeComponent',
    });
    console.log(response.items?.[0]?.fields);
    return response.items?.[0]?.fields;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return { title: '', description: '' };
  }
};

const block = await fetchEntries();

export default function HomeVideo() {
  return (
    <section className='video pb-xxl-22 pb-lg-18 pb-12'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <div className='banner'>
              <div className='rounded-box'>
                <img
                  src={block.image.fields.file.url}
                  className='w-100'
                  alt={block.imageAltText}
                  loading='lazy'
                />
              </div>
              <div className='effect-one'></div>
              <div className='effect-two'></div>
              <div className='video-iframe d-flex align-items-center justify-content-center'>
                <div className='video-icon me-sm-9 me-8'>
                  <a className='popup-vimeo' href={block.videoUrl}>
                    <svg
                      width='28'
                      height='32'
                      viewBox='0 0 28 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
