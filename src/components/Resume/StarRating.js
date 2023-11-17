import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(3)].map((_, index) => {
        return index < rating ? <StarIcon key={index} /> : <StarBorderIcon key={index} />;
      })}
    </div>
  );
};

export default StarRating;
