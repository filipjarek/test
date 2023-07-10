import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ChannelsManager from '../../components/ChannelsManager';
import ChartViewer from '../../components/ChartViewer';
import { FaArrowUp } from 'react-icons/fa';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [ channels, setChannels] = useState([]);

  const indexAPI = useCallback(async () => {
    try {
      const response = await axios.get('/api/channel/index');
      setChannels(response.data);
    } catch (error) {
      console.error('Failed to fetch channels:', error);
    }
  }, []);

  useEffect(() => {
    indexAPI();
  }, [indexAPI]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-medium text-rose-600 underline mb-6">
            Channel
          </h1>
          <p className="text-white">
            Aplikacja umożliwiająca CRUD kanałów pozyskania klienta.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <button type="button" className="py-2 px-4 border-2 border-white text-white hover:text-rose-600 hover:border-rose-600 pt-2 pb-2 pl-6 pr-6 text-center font-medium text-lg">
            <Link to="/channel/create">Add Channel</Link>
          </button>
        </div>
        {channels.length > 0 && (
          <div className="flex justify-center">
            <div className="w-full">
              <p className="text-white flex justify-center italic">Wykres kołowy</p>
              <ChartViewer channels={channels} />
            </div>
          </div>
        )}
        {channels.length > 0 && (
          <div className="flex justify-center">
            <div className="w-full">
              <p className="text-white flex justify-center italic mb-6">Lista kanałów</p>
              <ChannelsManager channels={channels} />
            </div>
          </div>
        )}
        <div className="flex justify-center mt-6">
          <button
            className="bg-rose-600 text-white px-3 py-2 rounded-full hover:bg-rose-700"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
