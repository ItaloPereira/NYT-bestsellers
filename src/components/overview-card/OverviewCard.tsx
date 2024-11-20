import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography, { type TypographyProps } from '@mui/material/Typography';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import type { BuyLink } from '@/types/books';

interface OverviewCardProps {
  title: string;
  image: string;
  rank: number;
  weeksOnTheList: string;
  contributor: string;
  description: string;
  buyLinks: BuyLink[];
}

const Card = styled(Stack)<StackProps>(({ theme }) => ({
  position: 'relative',
  gap: theme.spacing(2),
  
  [theme.breakpoints.up('md')]: {
    height: '100%',
    paddingRight: theme.spacing(2),
  },
}));

const BookImage = styled('img')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'block',
    inlineSize: '100%',
    blockSize: 175,
    objectFit: 'contain',
    objectPosition: 'center',
  },
}));

const BookRank = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[500],

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#dadde9',
  },
}));

const OverviewCard = ({ title, image, rank, weeksOnTheList, contributor, description, buyLinks }: OverviewCardProps) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Card direction={{ xs: 'row', md: 'column' }}>
      <BookRank variant="h5" component="span">{rank}</BookRank>
      <BookImage src={image} alt={title} />
      <Box>
        <Typography display={{ xs: 'none', md: 'block' }}>{weeksOnTheList}</Typography>
        <Typography variant="h6" component="h3" fontWeight={600}>{title}</Typography>
        <Typography variant="subtitle1" component="span">{contributor}</Typography>
        <Typography display={{ xs: 'none', md: 'block' }} variant="body1">{description}</Typography>
      </Box>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Box marginTop="auto" display={{ xs: 'none', md: 'block' }}>
          <HtmlTooltip
            PopperProps={{
              disablePortal: true,
            }}
            arrow
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <Stack>
                {buyLinks.map((link, index) => (
                  <Link key={index} href={link.url} target="_blank" display="block">{link.name}</Link>
                ))}
              </Stack>
            }
          >
            <Button
              variant="contained"
              size="small"
              onClick={handleTooltipOpen}
              endIcon={<ArrowDropDownIcon fontSize="small" />}
            >Buy</Button>
          </HtmlTooltip>
        </Box>
      </ClickAwayListener>
    </Card>
  )
}

export default OverviewCard;