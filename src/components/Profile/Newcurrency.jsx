import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DialogContentText } from '@mui/material'; // Adjust import path based on your UI library


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(2),
    maxWidth: "470px",
    color: "#fff",
    overflow: "hidden",
    backgroundColor: "#1D1E28",
    borderRadius: "16px",
    "@media (max-width: 500px)": {
      minWidth: "90vw",
    },
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Newcurrency = ({ showNewCurrency, handleRequestNewCurrency }) => {
  return (
    

    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',width: '100%', height: '100%', padding: 24, transform: 'rotate(-180deg)', transformOrigin: '0 0', background: '#1D1E28', borderRadius: 16, overflow: 'hidden', border: '1px rgba(255, 255, 255, 0.05) solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{height: 51, padding: 16, transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#343BFF', borderRadius: 12, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 14, fontFamily: 'Manrope', fontWeight: '700', wordWrap: 'break-word'}}>Request</div>
            </div>
            <div style={{height: 51, padding: 16, transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 12, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 14, fontFamily: 'Manrope', fontWeight: '700', wordWrap: 'break-word'}}>Cancel</div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
            <div style={{width: 420, height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px rgba(255, 255, 255, 0.05) solid'}}></div>
            <div style={{width: 420, transform: 'rotate(180deg)', transformOrigin: '0 0', color: 'rgba(255, 255, 255, 0.40)', fontSize: 14, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Note that the “other currencies” will take sometime to get featured in our popular currency list due to some operational constraint. We will get back to you once it’s implemented</div>
            <div style={{width: 420, height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px rgba(255, 255, 255, 0.05) solid'}}></div>
            <div style={{width: 420, transform: 'rotate(180deg)', transformOrigin: '0 0', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 50, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Dinar - Dubai</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
                    </div>
                </div>
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 50, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Swiss Franc - Switzerland</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
                    </div>
                </div>
                <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 50, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Japanese Yen - Japan</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
                    </div>
                </div>
            </div>
            <div style={{width: 420, transform: 'rotate(180deg)', transformOrigin: '0 0', color: 'rgba(255, 255, 255, 0.40)', fontSize: 14, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Added currencies</div>
            <div style={{width: 420, height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px rgba(255, 255, 255, 0.05) solid'}}></div>
            <div style={{width: 422, height: 82, transform: 'rotate(180deg)', transformOrigin: '0 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flex: '1 1 0', padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 12, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: 'rgba(255, 255, 255, 0.40)', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', wordWrap: 'break-word'}}>Search country/currency</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
                    </div>
                </div>
            </div>
            <div style={{width: 420, transform: 'rotate(180deg)', transformOrigin: '0 0', color: 'white', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', wordWrap: 'break-word'}} onClick={handleRequestNewCurrency} >Request New Currency</div>
        </div>
    </div>
</div>
  );
};

export default Newcurrency;
