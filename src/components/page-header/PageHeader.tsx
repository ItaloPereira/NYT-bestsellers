import { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import ShareIcon from '@mui/icons-material/Share';

interface PageHeaderProps {
  title: string;
  description?: string;
  showShareButton?: boolean;
}

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

const PageHeader = ({ title, description, showShareButton }: PageHeaderProps) => {
  const shareUrl = window.location.href;
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Stack component="section" gap={2} aria-label="Page Header">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }} component="h1">{title}</Typography>
          {description && (
            <Typography component="p" color="text.secondary">{description}</Typography>
          )}
        </Box>
        {showShareButton && (
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Box>
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
                  <Stack direction="row" spacing={1}>
                    <EmailShareButton url={shareUrl} title={title}>
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <LinkedinShareButton url={shareUrl} title={title}>
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <FacebookShareButton url={shareUrl} title={title}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={title}>
                      <XIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl} title={title}>
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </Stack>
                }
              >
                <IconButton color="secondary" aria-label="Share" onClick={handleTooltipOpen}>
                  <ShareIcon />
                </IconButton>
              </HtmlTooltip>
            </Box>
          </ClickAwayListener>
        )}
      </Stack>
    </Stack>
  );
};

export default PageHeader;