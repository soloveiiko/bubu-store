import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SendButton from '../commons/SendButton';

const PriceRange = ({ min, max, onChange, onPriceFilter }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, getPercent, onChange]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const handlerPrice = () => {
    onPriceFilter({ min: minVal, max: maxVal });
  };

  return (
    <div className="range-price">
      <div className="thumbs">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-left"
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb-right"
        />
      </div>

      <div className="slider">
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
        <div className="slider-values">
          <div className="slider-left-value">
            <input
              value={minVal}
              min={min}
              max={max}
              style={{ width: '40px', height: '25px' }}
              onChange={(e) => {
                setMinVal(e.target.value);
              }}
            />
          </div>
          -
          <div className="slider-right-value">
            <input
              value={maxVal}
              min={min - 1}
              max={max}
              style={{ width: '40px', height: '25px' }}
              onChange={(e) => {
                setMaxVal(e.target.value);
              }}
            />
          </div>
          <SendButton onClick={() => handlerPrice()} />
        </div>
      </div>
    </div>
  );
};

PriceRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PriceRange;
