import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf'; // Import Half Star Icon
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[0, 1, 2].map((index) => {
        if (rating > index) {
          if (rating < index + 1) {
            // Render half star if rating is between index and index + 1
            return <StarHalfIcon key={index} />;
          }
          // Render full star
          return <StarIcon key={index} />;
        }
        // Render empty star
        return <StarBorderIcon key={index} />;
      })}
    </div>
  );
};

export default StarRating;
