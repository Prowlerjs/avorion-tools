import {useContext} from "react";
import {IntlContext} from "~contexts/intl";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~store";
import {Card, Divider, IconButton, Stack, Table, Typography} from "@mui/joy";
import {ComponentType} from "~constants/enums/components";
import {CargoItemType} from "~components/cargo-table/cargo-type";
import {CargoItemQuantity} from "~components/cargo-table/cargo-quantity";
import {ClearAll} from "@mui/icons-material";
import {clearCargoComponents} from "~reducers/cargo.ts";

export function CargoTable() {
    const intlContext = useContext(IntlContext);
    const cargo = useSelector((state: RootState) => state.cargo);
    const dispatch = useDispatch();

    if (Object.keys(cargo.entities).length === 0) {
        return null;
    }

    function handleResetCargo() {
        dispatch(clearCargoComponents());
    }

    return (
        <Card variant="outlined" sx={{p: 0, gap: 0, boxShadow: "sm"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{p: 2, pb: 0}}>
                <Typography level="body-lg" fontWeight="bold" textColor="white">
                    {intlContext.text("UI", "cargo")}
                </Typography>
                <IconButton onClick={handleResetCargo} variant="soft" color="danger">
                    <ClearAll/>
                </IconButton>
            </Stack>
            <Divider sx={{mt: 2}}/>
            <Table>
                <tbody>
                {(Object.keys(cargo.entities) as ComponentType[]).sort((a, b) => a.localeCompare(b)).map(type => (
                    <tr key={type}>
                        <CargoItemType type={type}/>
                        <CargoItemQuantity type={type} value={cargo.entities[type]}/>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>
    )
}