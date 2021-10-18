import { render, screen } from '@testing-library/react'
import { Quotes } from './quotes'
import React from 'react';


test('render received quote, speaker and a button', () => {

    let quote = 'test quote';
    let speaker = 'radom speaker';

    render(<Quotes quote={quote} speaker={speaker} />);

    quote = screen.getByText(quote);
    speaker = screen.getByText(`- ${speaker}`);
    const button = screen.getByText('button');

    expect(quote).toBeInTheDocument();
    expect(speaker).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})