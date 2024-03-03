import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer className='mt-auto py-4 text-center text-[10px] md:py-2'>
      <span className='flex flex-row justify-center'>
        <span className='flex items-center text-center font-medium'>
          The code for this app can be found on
        </span>

        <a
          href='https://github.com/dsazuwa/potfolio'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center text-gray-500'
        >
          <GitHubLogoIcon className='mx-1 h-2 w-2' />

          <span className='flex items-center font-semibold underline'>
            GitHub
          </span>
        </a>
      </span>
    </footer>
  );
}
