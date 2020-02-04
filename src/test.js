import axios from 'axios';

import { fetchData, API } from './';


describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: [
        {
        "id": "5e173ad26e235450d4f5714d",
        "source": {
        "id": "mashable",
        "name": "Mashable"
        },
        "author": "Joseph Green",
        "title": "Get up to 15% off the best Disney movies on Amazon",
        "description": "TL;DR: Disney movies like Avengers: Endgame, The Last Jedi, and Captain Marvel are on sale on Amazon, saving you up to 15% on list price. There are going to be many moments over the festive period when you'll desperately want the noise to stop. It's at this p…",
        "url": "https://mashable.com/uk/shopping/best-deal-disney-cinema-dec-16/",
        "urlToImage": "https://mondrian.mashable.com/2019%252F12%252F16%252F66%252F3d12871b30f546418e4e59f51de50c10.dcefc.png%252F1200x630.png?signature=t8WDRefq7xM5ssLuGDPYv-CYsBg=",
        "publishedAt": "2019-12-16T16:40:36Z",
        "content": "TL;DR: Disney movies like Avengers: Endgame, The Last Jedi, and Captain Marvel are on sale on Amazon, saving you up to 15% on list price.\r\nThere are going to be many moments over the festive period when you'll desperately want the noise to stop. It's at this … [+760 chars]",
        "bookmarked": false
        },
        {
        "id": "5e173ad26e235450d4f5714d",
        "source": {
        "id": "mashable",
        "name": "Mashable"
        },
        "author": "Joseph Green",
        "title": "Get up to 15% off the best Disney movies on Amazon",
        "description": "TL;DR: Disney movies like Avengers: Endgame, The Last Jedi, and Captain Marvel are on sale on Amazon, saving you up to 15% on list price. There are going to be many moments over the festive period when you'll desperately want the noise to stop. It's at this p…",
        "url": "https://mashable.com/uk/shopping/best-deal-disney-cinema-dec-16/",
        "urlToImage": "https://mondrian.mashable.com/2019%252F12%252F16%252F66%252F3d12871b30f546418e4e59f51de50c10.dcefc.png%252F1200x630.png?signature=t8WDRefq7xM5ssLuGDPYv-CYsBg=",
        "publishedAt": "2019-12-16T16:40:36Z",
        "content": "TL;DR: Disney movies like Avengers: Endgame, The Last Jedi, and Captain Marvel are on sale on Amazon, saving you up to 15% on list price.\r\nThere are going to be many moments over the festive period when you'll desperately want the noise to stop. It's at this … [+760 chars]",
        "bookmarked": false
        }
        ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('react')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `http://www.mocky.io/v2/5e382611310000e489d37ff9`,
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});
