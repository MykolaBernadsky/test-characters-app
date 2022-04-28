import { screen } from '@testing-library/react';
import axios from "axios";
import EpisodeList from "./EpisodeList";
import {renderWithRouter} from "../../helpers/renderWithRouter";

const mockAxios = jest.genMockFromModule('axios')

describe('EPISODE LIST TEST', () => {
  let response;

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


    response = {
      data: [
        {
          episode_id: 1,
          title: 'Pilot',
          air_date: '01-20-2008'
        }
      ]
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('render episode list', async() => {
    mockAxios.get.mockReturnValue(response);

    renderWithRouter(<EpisodeList />);

    const episodes = await screen.findAllByTestId('episode-item');

    expect(episodes.length).toBeGreaterThan(1);

    screen.debug()
  })
});

