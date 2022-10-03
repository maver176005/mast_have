import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function MoreInfoCard({description}) {
    return (
        <>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Body>
                                {description}
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <span
                        className="d-grid gap-2">
                        <Button  variant="outline-primary">
                            Смотреть описание
                        </Button>
                    </span>

                </OverlayTrigger>
            ))}
        </>
    );
}

export default MoreInfoCard;