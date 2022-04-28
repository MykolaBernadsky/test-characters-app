import { screen } from '@testing-library/react';
import axios from "axios";
import {renderWithRouter} from "../../helpers/renderWithRouter";
import SingleEpisode from "./SingleEpisode";

const mockAxios = jest.genMockFromModule('axios');

describe('SINGLE EPISODE TEST', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('render singe episode', async () => {
    mockAxios.get.mockReturnValue();

    renderWithRouter(<SingleEpisode />, '/episodes/:id');
    const episode = screen.getByTestId('single-episode');
    const characters = await screen.findAllByTestId('character-item');

    expect(episode).toBeInTheDocument();
    expect(characters.length).toBeGreaterThan(1);

  })
})