import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  it('rendered correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('open and closing navbar', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const navBtn = screen.getByLabelText('navigation button');
    await userEvent.click(navBtn);
    // Use find instead of get because there's animation
    const navContent = await screen.findByLabelText('navigation content');
    expect(navContent).toBeInTheDocument();

    await userEvent.click(navBtn);
    expect(navContent).not.toBeInTheDocument();
  });

  it('show cart item count correctly', () => {
    const mockCount = 10;

    render(
      <MemoryRouter>
        <Header itemCount={mockCount} />
      </MemoryRouter>,
    );

    const itemCountEl = screen.getByLabelText('item in cart');
    expect(itemCountEl).toHaveTextContent(mockCount.toString());
  });
});
