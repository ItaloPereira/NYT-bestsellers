import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  gap: theme.spacing(1),
  borderBlock: '1px solid',
  borderColor: theme.palette.grey[300],

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
  },
}));

interface DateFilterProps {
  value: string;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DateFilter = ({ value, onPrev, onNext, isLast }: DateFilterProps) => {
  const [year, month, day] = value.split('-');
  const formattedCurrent = `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;

  return (
    <Container>
      <IconButton aria-label="previous week" onClick={onPrev}>
        <ChevronLeftIcon />
      </IconButton>

      <Typography>{formattedCurrent}</Typography>

      <IconButton
        aria-label="next week"
        onClick={onNext}
        disabled={isLast}
      >
        <ChevronRightIcon />
      </IconButton>
    </Container>
  );
};

export default DateFilter;