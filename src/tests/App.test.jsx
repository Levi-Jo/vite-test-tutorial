import { describe, it, expect } from 'vitest';
import App from '../App';
import { render, screen } from '@testing-library/react';


describe('App component', ()=>{
    it('renders correct heading', ()=>{
        render(<App/>)

        expect(screen.getByRole("heading").textContent).toMatch(/our first test/i)
    });

   
})

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});